class CenterController < ApplicationController
    before_action :require_user, only: [:new]
    layout 'center' 
    
    def new
    end

end
