#schema

1)user
    -id:String
    -firstname:string
    -lastname:string
    -email:string
    -password:string(hash)
    -posts:[Posts]
    -comments:[commnets]
    -profilePicture: string
    -phonenumber:string
    -followers: [user]
    -followers: [user]
    -savedPosts:[Posts]
    -role : Enum[0,1,2] // 0 is normal user, 1 is moderator, 2 is admin
    -lastLogin : Date
    -createdAt : Date
    -updatedAt : Date

2)Post
    -id:String
    -title:String
    -description: String [optional]
    -image: String
    -comments:[comments]
    -likes : [User]
    -shareCount:Number
    -user: User
    -tags:[User]
    -createdAt:Date
    -updatedAt: Date
    -deleted: Boolean

3)Comment
    -id:String
    -commonText:String
    -user: User
    -likes: [user]
    -createdAt:Date
    -updatedAt: Date
    -deleted: Boolean
    -isEdited : Boolean (Toggle true if updated by users)

#API's

-Auth
    -Login (Public)
    -Signup(Public)
    -Privilege(Admin)
    -Logout(Public)
    -Reset Password(Public)
-User
    -Get All Posts (Public)
    -Post a comment(Public)
    -Like a comment(Public)
    -Update own comment(Public)
    -Delete own comment(Public)
    -Delete any comment(Moderator/Admin)
-Admin
    -Create Moderators (Admin)
    -Delete Moderators (Admin)
    -Change Privileges (Admin)
    -Disable a user (Admin)
    -Get all users (Admin)
    -Get all comments (Admin)



