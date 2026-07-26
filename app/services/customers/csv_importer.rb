require "csv"

module Customers
  class CsvImporter
    def self.call(organization:, requested_by:, csv:)
      run = ImportRun.create!(organization: organization, requested_by: requested_by, kind: "customers", status: "processing")

      CSV.parse(csv, headers: true).each do |row|
        organization.customers.create!(row.to_h.slice("name", "email_address", "status", "notes"))
        run.increment!(:processed_rows)
      rescue ActiveRecord::RecordInvalid => error
        run.increment!(:failed_rows)
        run.update!(errors: run.errors + [ { row: row.to_h, messages: error.record.errors.full_messages } ])
      end

      run.update!(status: run.failed_rows.zero? ? "completed" : "failed")
      run
    rescue CSV::MalformedCSVError => error
      run&.update!(status: "failed", errors: [ { messages: [ error.message ] } ])
      raise
    end
  end
end
