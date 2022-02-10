# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name: 'Samuel-DeSantis')
User.create(name: 'N9-Lin')
User.create(name: 'Linda-Roldan')

Message.create(user_id: 1, content: 'This app is cool!')
Message.create(user_id: 1, content: 'Woot woot!')
Message.create(user_id: 2, content: 'Hello World')
Message.create(user_id: 3, content: 'Denver is great')

