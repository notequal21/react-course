
export type PostsType = {
    id: number
    userName: string
    postTime: string
    postDate: string
    postText: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type DialogType = {
    id: number
    userName: string
    userImg: any
}

export type MessageType = {
    id: number
    myMsg: boolean
    userName: string
    userImg: any
    message: string
}

export type UsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}