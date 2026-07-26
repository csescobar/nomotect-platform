class CustomerImportJob < ApplicationJob
  queue_as :default

  def perform(organization_id:, requested_by_id:, csv:, idempotency_key:)
    IdempotentExecution.call(key: idempotency_key, scope: "customer-import:#{organization_id}") do
      run = Customers::CsvImporter.call(
        organization: Organization.find(organization_id),
        requested_by: User.find(requested_by_id),
        csv: csv
      )
      { "import_run_id" => run.id, "status" => run.status }
    end
  end
end
