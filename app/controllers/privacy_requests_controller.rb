class PrivacyRequestsController < ApplicationController
  def index
    requests = PrivacyRequest.where(organization: Current.organization, requested_by: Current.user).order(created_at: :desc)
    render json: requests.as_json(only: %i[id kind status result failure_reason completed_at created_at])
  end

  def create
    Current.require_tenant!
    data_request = PrivacyRequest.create!(
      organization: Current.organization,
      requested_by: Current.user,
      kind: params.require(:kind)
    )
    PrivacyRequestJob.perform_later(Current.organization.id, data_request.id)
    render json: data_request.as_json(only: %i[id kind status created_at]), status: :accepted
  end
end
