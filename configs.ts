// Get the .env file that the user should have created, and get the token
const token = Deno.env.get("token") || "";

export interface Config {
  token: string;
  botId: bigint;
}

export const configs = {
  /** Get token from ENV variable */
  token,
  /** Get the BotId from the token */
  botId: BigInt(atob(token.split(".")[0])),
  /** The server id where you develop your bot and want dev commands created. */
  devGuildId: BigInt(Deno.env.get("dev_guild_id")!),
};

// libraries of 'homework'

export const hugImages = [
  "https://i.pinimg.com/564x/47/2c/61/472c61d0b23cf631fadb6e2b7707145c.jpg",
  "https://w0.peakpx.com/wallpaper/53/5/HD-wallpaper-umineko-no-naku-koro-ni-caott-sun-blush-sisters-teddyt-bear-nice-bush-long-hair-hugging-mom-brown-hair-toy-happy-suite-hug-sister-teddy-bear-looking.jpg",
  "https://cdn.discordapp.com/attachments/989648656892301322/994952433258213466/unknown.png",
  "https://konachan.com/image/c7a7b419422a418ee490263dfdec0850/Konachan.com%20-%2059337%20beatrice%20blonde_hair%20butterfly%20hug%20male%20red_hair%20umineko_no_naku_koro_ni%20ushiromiya_battler.jpg",
  "https://www.wallpaperup.com/uploads/wallpapers/2013/12/07/187002/15eba9fb0714d8f56aef45ae12cae3e7.jpg",
  "https://d31u62iyrzhln9.cloudfront.net/images/ep5_5.original.png",
  "https://c4.wallpaperflare.com/wallpaper/454/520/904/umineko-no-naku-koro-ni-beatrice-ushiromiya-maria-shannon-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/669/436/938/anime-umineko-when-they-cry-lion-ushiromiya-willard-wright-wallpaper-preview.jpg",
  "https://cdn.donmai.us/sample/be/ac/__ushiromiya_maria_ushiromiya_rosa_sakutarou_and_maria_umineko_no_naku_koro_ni_drawn_by_yae_mono110__sample-beaccaacb75599eecc42d371489450b2.jpg",
  "https://c.tenor.com/rYDg8zLXRvoAAAAC/umineko-umineko-no-naku-koro-ni.gif",
  "https://img5.goodfon.com/wallpaper/nbig/3/c9/kogda-plachut-chaiki-umineko-no-naku-koro-ni-para-romantika.jpg",
  "https://images6.fanpop.com/image/quiz/956000/956353_1355128992754_320_255.png",
  "https://preview.redd.it/rb3287rb44x61.png?width=1950&format=png&auto=webp&s=36165d30b7b09f9359a726af86cfa983475ab865",
  "https://cdn.donmai.us/sample/2e/f8/__beatrice_and_ushiromiya_natsuhi_umineko_no_naku_koro_ni_drawn_by_myuu_art__sample-2ef835fb2f9ee929c18729371359bb7c.jpg",
];

export const feetImages = [
  "https://cdn.discordapp.com/attachments/989649624673427506/989931163042852914/unknown.png",
  "https://cdn.discordapp.com/attachments/989649624673427506/990326414886731786/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993988924944957450/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993430307703369778/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993427058136981614/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993427017200566354/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993426992781344788/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993426968060112906/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/993426849734594652/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/992925076511019089/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/992666890373713990/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/992665033580478565/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/992107336296575106/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/991108026511671397/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/991107945301549076/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/991107843669364746/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990514035864784906/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990336357266247700/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990336251221667900/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990336195886215269/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990218145681801226/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/990209337198792744/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989946876180721794/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989946409576980510/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989946150507393064/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989945997314621510/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989945168717303878/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989944442431610880/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989944351381671966/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989940659781779476/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989937208788148314/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/989649190160334908/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989907785770729524/unknown.png",
  "https://pbs.twimg.com/media/FVm6PEGUAAAYm1w.jpg",
  "https://cdn.discordapp.com/attachments/989648029294411836/989908522470883349/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989908610723250206/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989908675240030238/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989912184618369064/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989912212762157086/unknown.png",
  "https://cdn.discordapp.com/attachments/989648029294411836/989923931987271730/unknown.png",
  "https://cdn.discordapp.com/attachments/989648656892301322/991102770381848636/unknown.png",
  "https://media.discordapp.net/attachments/667586157223084033/982403218015412284/YaeMiko_Lv8.gif",
  "https://media.discordapp.net/attachments/667586157223084033/982403217189126184/YaeMiko_Lv6.gif",
  "https://media.discordapp.net/attachments/667586157223084033/982403219550515200/YaeMiko_Lv5.gif",
  "https://cdn.discordapp.com/attachments/990771107781042176/990771304951074816/unknown.png",
  "https://cdn.discordapp.com/attachments/990771107781042176/990771489605300245/unknown.png",
  "https://i.pinimg.com/originals/b7/8a/fb/b78afbb3d542fed40cef690814efe099.gif",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992100158488636/0A0FCBD3-745E-4D5B-9721-022E50AE185A.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992100435296276/0B4BAD4A-0CF5-43F6-92BA-17967A3C6AA7_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992100938633277/0BF45B99-4021-49D3-B2BD-6A833CE4FACA_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992101257383956/0C675F5E-C09C-4FD5-A393-2FE6852393AF_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992101538414602/0CCC473F-EBB7-4EDF-AB43-912A22D65B28_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992101836193922/0DA39505-7FAB-4D11-BE12-7171E935E4C7.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992121222287501/0EA1CFB2-5CE5-4F0F-A0C0-BC2AD7855510_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992122363121715/1D97F4BD-84FF-4090-AE70-3439D65E52F2_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992122895814756/1DE8CDD8-BD21-487D-9619-EAB051DDCBB2_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992123147468910/1EFA6E42-A82E-46FE-A55F-24A9A743BBDF_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992123407503420/1F77C432-A6D9-402B-8933-5B8805CF89AF_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/990280475857788988/993991183309217832/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/996114221714640966/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/996157472190505101/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/996157748611928114/unknown.png",
  "https://cdn.discordapp.com/attachments/988985567461113957/996039743043272755/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/996158103370342492/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/996157968401846372/unknown.png",
  "https://cdn.discordapp.com/attachments/989646358426296401/1011279784258572308/3bd606ed338a7a6efc6a85d8799c82f5.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992761801556140/A4EB2025-920D-4920-BA66-F39212CBF456_1_102_o.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992762200006696/A5A342C5-AAEB-4D81-B0EE-35CF4AA30BC8.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992761176592555/72693097-48E6-45D4-8ACA-A292EA1D16EB.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992760924950638/50996145-F8B1-4012-BFC6-8D76A9FD6310_1_102_o.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992556305825862/222961F5-E7F7-4B65-AED9-A60507314E1D_1_102_o.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992556020600912/67655ECF-E2CA-4857-ACEE-C4A16563CDA0_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992555718615141/57229CA7-3521-4223-AD9C-0EC8CED517F3_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992555458580520/57218B25-3F84-49A8-8B5B-AC10D80834C9_1_105_c.jpeg",
  "https://cdn.discordapp.com/attachments/989646358426296401/994992555190128670/23991E16-E3BF-4AD9-8269-255969861E69_1_105_c.jpeg",
];

export const hornyImages = [
  "https://pbs.twimg.com/media/FWjHYJKXgAce1yz.jpg",
  "https://pbs.twimg.com/media/FW3HP8gXEAI7Ynm.jpg",
];
