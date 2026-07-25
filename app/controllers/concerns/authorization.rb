module Authorization
  extend ActiveSupport::Concern

  private

  def authorize!(record, query)
    policy = policy_for(record)
    allowed = policy.public_send(query)
    raise ApplicationPolicy::NotAuthorizedError unless allowed

    true
  end

  def policy_for(record)
    policy_class = "#{record.class.name}Policy".constantize
    policy_class.new(Current.user, record)
  end
end
