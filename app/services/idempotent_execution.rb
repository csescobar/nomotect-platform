class IdempotentExecution
  class InProgress < StandardError; end

  def self.call(key:, scope: "default", expires_in: 24.hours)
    record = IdempotencyRecord.find_or_initialize_by(key: key, scope: scope)
    return record.result if record.completed?
    raise InProgress if record.persisted? && record.started?

    record.assign_attributes(status: "started", expires_at: expires_in.from_now)
    record.save!
    result = yield
    record.update!(status: "completed", result: result || {})
    record.result
  rescue StandardError
    record&.update!(status: "failed")
    raise
  end
end
