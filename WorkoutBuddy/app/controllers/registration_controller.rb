class RegistrationController < ApplicationController
    def new
        @profile = Profile.new
    end

    def create
        @profile = Profile.new(profile_params)
        if @profile.save
            redirect_to '/profile'
        else
            render 'new'
        end
    end

    private
    def profile_params
        params.require(:profile)
        .permit(:first_name)
        .permit(:last_name)
    end
end
