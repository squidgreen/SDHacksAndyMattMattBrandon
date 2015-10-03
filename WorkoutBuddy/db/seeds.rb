# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#

matt = Profile.create(first_name: "Matt", last_name: "Chinn", email: "Hi", password: "Bye")
andy = Profile.create(first_name: "Andy", last_name: "Shih", email: "a", password: "b")
