class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :authenticate_user!

  protected
  def after_sign_in_path_for(resource)
    to_do_lists_path
  end

  def after_sign_out_path_for(resource_or_scope)
    new_user_session_path
  end
end
