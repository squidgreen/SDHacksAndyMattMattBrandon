class EditStatsController < ApplicationController
    def modify
        @profile = Profile.new(profile_params)
            render 'editStats'
            #redirect_to '/profile'
end
