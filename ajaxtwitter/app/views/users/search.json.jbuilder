json.array!(@users) do |user|
    debugger
    json.(user, *User.column_names)
    json.followed(current_user.follows?(user))
    puts json
    puts "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
end
