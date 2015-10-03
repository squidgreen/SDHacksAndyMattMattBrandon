class ProfileController < ApplicationController

def edit
    @profiles = Profile.all
end

end
