export interface main {
    offeringSection: offeringSection
    aboutUsSection: aboutUs,
    contactUsSection: contactUs,
    homeSection: homeSection,
    singleAppSection: singleAppSection,
    socialSection: socialSection[],
}

export interface aboutUs {
    btn: btn,
    desc: string,
    sectionImg: string,
    shortDesc: string,
    tag: string,
    title: string,
}
export interface btn {
    link: string,
    text: string,
    show: boolean
}
export interface contactUs {
    btn: btn,
    tag: string,
    title: string,
    desc: string,
}
export interface homeSection {
    btn: btn,
    title: string,
    desc: string,
    sectionImg: string,

}
export interface offeringSection {
    tag: string,
    title: string,
    services: [
        {
            desc: string,
            title: string,
            img: string,
        }
    ]

}
export interface FileUpload {
    name?: string;
    url?: string;
    file: File;
  }
export interface singleAppSection {
    tag: string,
    title: string,
    desc: string,
    sectionImg: string,
    AppStoreBtn:socialSection[]

}
export interface socialSection {
    img: string,
    link: string,
    show: boolean
}