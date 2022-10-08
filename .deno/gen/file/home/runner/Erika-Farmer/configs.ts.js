const token = Deno.env.get("token") || "";
export const configs = {
    token,
    botId: BigInt(atob(token.split(".")[0])),
    devGuildId: BigInt(Deno.env.get("dev_guild_id")),
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBTzFDLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRztJQUVyQixLQUFLO0lBRUwsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFFLENBQUM7Q0FDbEQsQ0FBQztBQUlGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRztJQUN2Qix5RUFBeUU7SUFDekUsNE1BQTRNO0lBQzVNLDBGQUEwRjtJQUMxRixzTUFBc007SUFDdE0sdUdBQXVHO0lBQ3ZHLGlFQUFpRTtJQUNqRSxxSUFBcUk7SUFDckksc0lBQXNJO0lBQ3RJLHFMQUFxTDtJQUNyTCwwRUFBMEU7SUFDMUUsOEdBQThHO0lBQzlHLCtFQUErRTtJQUMvRSxzSEFBc0g7SUFDdEgsNkpBQTZKO0NBQzlKLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDeEIsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsaURBQWlEO0lBQ2pELDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRixnR0FBZ0c7SUFDaEcsZ0dBQWdHO0lBQ2hHLGdHQUFnRztJQUNoRywwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDhFQUE4RTtJQUM5RSx3SEFBd0g7SUFDeEgsZ0lBQWdJO0lBQ2hJLGdJQUFnSTtJQUNoSSxnSUFBZ0k7SUFDaEksZ0lBQWdJO0lBQ2hJLHdIQUF3SDtJQUN4SCxnSUFBZ0k7SUFDaEksZ0lBQWdJO0lBQ2hJLGdJQUFnSTtJQUNoSSxnSUFBZ0k7SUFDaEksZ0lBQWdJO0lBQ2hJLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRiwwRkFBMEY7SUFDMUYsMEZBQTBGO0lBQzFGLDBGQUEwRjtJQUMxRixxSEFBcUg7SUFDckgsZ0lBQWdJO0lBQ2hJLHdIQUF3SDtJQUN4SCx3SEFBd0g7SUFDeEgsZ0lBQWdJO0lBQ2hJLGdJQUFnSTtJQUNoSSxnSUFBZ0k7SUFDaEksZ0lBQWdJO0lBQ2hJLGdJQUFnSTtJQUNoSSxnSUFBZ0k7Q0FDakksQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRztJQUN6QixpREFBaUQ7SUFDakQsaURBQWlEO0NBQ2xELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZXQgdGhlIC5lbnYgZmlsZSB0aGF0IHRoZSB1c2VyIHNob3VsZCBoYXZlIGNyZWF0ZWQsIGFuZCBnZXQgdGhlIHRva2VuXG5jb25zdCB0b2tlbiA9IERlbm8uZW52LmdldChcInRva2VuXCIpIHx8IFwiXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgdG9rZW46IHN0cmluZztcbiAgYm90SWQ6IGJpZ2ludDtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZ3MgPSB7XG4gIC8qKiBHZXQgdG9rZW4gZnJvbSBFTlYgdmFyaWFibGUgKi9cbiAgdG9rZW4sXG4gIC8qKiBHZXQgdGhlIEJvdElkIGZyb20gdGhlIHRva2VuICovXG4gIGJvdElkOiBCaWdJbnQoYXRvYih0b2tlbi5zcGxpdChcIi5cIilbMF0pKSxcbiAgLyoqIFRoZSBzZXJ2ZXIgaWQgd2hlcmUgeW91IGRldmVsb3AgeW91ciBib3QgYW5kIHdhbnQgZGV2IGNvbW1hbmRzIGNyZWF0ZWQuICovXG4gIGRldkd1aWxkSWQ6IEJpZ0ludChEZW5vLmVudi5nZXQoXCJkZXZfZ3VpbGRfaWRcIikhKSxcbn07XG5cbi8vIGxpYnJhcmllcyBvZiAnaG9tZXdvcmsnXG5cbmV4cG9ydCBjb25zdCBodWdJbWFnZXMgPSBbXG4gIFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vNTY0eC80Ny8yYy82MS80NzJjNjFkMGIyM2NmNjMxZmFkYjZlMmI3NzA3MTQ1Yy5qcGdcIixcbiAgXCJodHRwczovL3cwLnBlYWtweC5jb20vd2FsbHBhcGVyLzUzLzUvSEQtd2FsbHBhcGVyLXVtaW5la28tbm8tbmFrdS1rb3JvLW5pLWNhb3R0LXN1bi1ibHVzaC1zaXN0ZXJzLXRlZGR5dC1iZWFyLW5pY2UtYnVzaC1sb25nLWhhaXItaHVnZ2luZy1tb20tYnJvd24taGFpci10b3ktaGFwcHktc3VpdGUtaHVnLXNpc3Rlci10ZWRkeS1iZWFyLWxvb2tpbmcuanBnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ4NjU2ODkyMzAxMzIyLzk5NDk1MjQzMzI1ODIxMzQ2Ni91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8va29uYWNoYW4uY29tL2ltYWdlL2M3YTdiNDE5NDIyYTQxOGVlNDkwMjYzZGZkZWMwODUwL0tvbmFjaGFuLmNvbSUyMC0lMjA1OTMzNyUyMGJlYXRyaWNlJTIwYmxvbmRlX2hhaXIlMjBidXR0ZXJmbHklMjBodWclMjBtYWxlJTIwcmVkX2hhaXIlMjB1bWluZWtvX25vX25ha3Vfa29yb19uaSUyMHVzaGlyb21peWFfYmF0dGxlci5qcGdcIixcbiAgXCJodHRwczovL3d3dy53YWxscGFwZXJ1cC5jb20vdXBsb2Fkcy93YWxscGFwZXJzLzIwMTMvMTIvMDcvMTg3MDAyLzE1ZWJhOWZiMDcxNGQ4ZjU2YWVmNDVhZTEyY2FlM2U3LmpwZ1wiLFxuICBcImh0dHBzOi8vZDMxdTYyaXlyemhsbjkuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2VwNV81Lm9yaWdpbmFsLnBuZ1wiLFxuICBcImh0dHBzOi8vYzQud2FsbHBhcGVyZmxhcmUuY29tL3dhbGxwYXBlci80NTQvNTIwLzkwNC91bWluZWtvLW5vLW5ha3Uta29yby1uaS1iZWF0cmljZS11c2hpcm9taXlhLW1hcmlhLXNoYW5ub24td2FsbHBhcGVyLXByZXZpZXcuanBnXCIsXG4gIFwiaHR0cHM6Ly9jNC53YWxscGFwZXJmbGFyZS5jb20vd2FsbHBhcGVyLzY2OS80MzYvOTM4L2FuaW1lLXVtaW5la28td2hlbi10aGV5LWNyeS1saW9uLXVzaGlyb21peWEtd2lsbGFyZC13cmlnaHQtd2FsbHBhcGVyLXByZXZpZXcuanBnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZG9ubWFpLnVzL3NhbXBsZS9iZS9hYy9fX3VzaGlyb21peWFfbWFyaWFfdXNoaXJvbWl5YV9yb3NhX3Nha3V0YXJvdV9hbmRfbWFyaWFfdW1pbmVrb19ub19uYWt1X2tvcm9fbmlfZHJhd25fYnlfeWFlX21vbm8xMTBfX3NhbXBsZS1iZWFjY2FhY2I3NTU5OWVlY2M0MmQzNzE0ODk0NTBiMi5qcGdcIixcbiAgXCJodHRwczovL2MudGVub3IuY29tL3JZRGc4ekxYUnZvQUFBQUMvdW1pbmVrby11bWluZWtvLW5vLW5ha3Uta29yby1uaS5naWZcIixcbiAgXCJodHRwczovL2ltZzUuZ29vZGZvbi5jb20vd2FsbHBhcGVyL25iaWcvMy9jOS9rb2dkYS1wbGFjaHV0LWNoYWlraS11bWluZWtvLW5vLW5ha3Uta29yby1uaS1wYXJhLXJvbWFudGlrYS5qcGdcIixcbiAgXCJodHRwczovL2ltYWdlczYuZmFucG9wLmNvbS9pbWFnZS9xdWl6Lzk1NjAwMC85NTYzNTNfMTM1NTEyODk5Mjc1NF8zMjBfMjU1LnBuZ1wiLFxuICBcImh0dHBzOi8vcHJldmlldy5yZWRkLml0L3JiMzI4N3JiNDR4NjEucG5nP3dpZHRoPTE5NTAmZm9ybWF0PXBuZyZhdXRvPXdlYnAmcz0zNjE2NWQzMGI3YjA5ZjkzNTlhNzI2YWY4NmNmYTk4MzQ3NWFiODY1XCIsXG4gIFwiaHR0cHM6Ly9jZG4uZG9ubWFpLnVzL3NhbXBsZS8yZS9mOC9fX2JlYXRyaWNlX2FuZF91c2hpcm9taXlhX25hdHN1aGlfdW1pbmVrb19ub19uYWt1X2tvcm9fbmlfZHJhd25fYnlfbXl1dV9hcnRfX3NhbXBsZS0yZWY4MzVmYjJmOWVlOTI5YzE4NzI5MzcxMzU5YmI3Yy5qcGdcIixcbl07XG5cbmV4cG9ydCBjb25zdCBmZWV0SW1hZ2VzID0gW1xuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0OTYyNDY3MzQyNzUwNi85ODk5MzExNjMwNDI4NTI5MTQvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDk2MjQ2NzM0Mjc1MDYvOTkwMzI2NDE0ODg2NzMxNzg2L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5Mzk4ODkyNDk0NDk1NzQ1MC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTM0MzAzMDc3MDMzNjk3NzgvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkzNDI3MDU4MTM2OTgxNjE0L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MzQyNzAxNzIwMDU2NjM1NC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTM0MjY5OTI3ODEzNDQ3ODgvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkzNDI2OTY4MDYwMTEyOTA2L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MzQyNjg0OTczNDU5NDY1Mi91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTI5MjUwNzY1MTEwMTkwODkvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkyNjY2ODkwMzczNzEzOTkwL3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MjY2NTAzMzU4MDQ3ODU2NS91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTIxMDczMzYyOTY1NzUxMDYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkxMTA4MDI2NTExNjcxMzk3L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MTEwNzk0NTMwMTU0OTA3Ni91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTExMDc4NDM2NjkzNjQ3NDYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkwNTE0MDM1ODY0Nzg0OTA2L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MDMzNjM1NzI2NjI0NzcwMC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTAzMzYyNTEyMjE2Njc5MDAvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTkwMzM2MTk1ODg2MjE1MjY5L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5MDIxODE0NTY4MTgwMTIyNi91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTAyMDkzMzcxOTg3OTI3NDQvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTg5OTQ2ODc2MTgwNzIxNzk0L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk4OTk0NjQwOTU3Njk4MDUxMC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85ODk5NDYxNTA1MDczOTMwNjQvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTg5OTQ1OTk3MzE0NjIxNTEwL3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk4OTk0NTE2ODcxNzMwMzg3OC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85ODk5NDQ0NDI0MzE2MTA4ODAvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTg5OTQ0MzUxMzgxNjcxOTY2L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk4OTk0MDY1OTc4MTc3OTQ3Ni91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85ODk5MzcyMDg3ODgxNDgzMTQvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTg5NjQ5MTkwMTYwMzM0OTA4L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ4MDI5Mjk0NDExODM2Lzk4OTkwNzc4NTc3MDcyOTUyNC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9tZWRpYS9GVm02UEVHVUFBQVltMXcuanBnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ4MDI5Mjk0NDExODM2Lzk4OTkwODUyMjQ3MDg4MzM0OS91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0ODAyOTI5NDQxMTgzNi85ODk5MDg2MTA3MjMyNTAyMDYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDgwMjkyOTQ0MTE4MzYvOTg5OTA4Njc1MjQwMDMwMjM4L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ4MDI5Mjk0NDExODM2Lzk4OTkxMjE4NDYxODM2OTA2NC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0ODAyOTI5NDQxMTgzNi85ODk5MTIyMTI3NjIxNTcwODYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDgwMjkyOTQ0MTE4MzYvOTg5OTIzOTMxOTg3MjcxNzMwL3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ4NjU2ODkyMzAxMzIyLzk5MTEwMjc3MDM4MTg0ODYzNi91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vbWVkaWEuZGlzY29yZGFwcC5uZXQvYXR0YWNobWVudHMvNjY3NTg2MTU3MjIzMDg0MDMzLzk4MjQwMzIxODAxNTQxMjI4NC9ZYWVNaWtvX0x2OC5naWZcIixcbiAgXCJodHRwczovL21lZGlhLmRpc2NvcmRhcHAubmV0L2F0dGFjaG1lbnRzLzY2NzU4NjE1NzIyMzA4NDAzMy85ODI0MDMyMTcxODkxMjYxODQvWWFlTWlrb19MdjYuZ2lmXCIsXG4gIFwiaHR0cHM6Ly9tZWRpYS5kaXNjb3JkYXBwLm5ldC9hdHRhY2htZW50cy82Njc1ODYxNTcyMjMwODQwMzMvOTgyNDAzMjE5NTUwNTE1MjAwL1lhZU1pa29fTHY1LmdpZlwiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk5MDc3MTEwNzc4MTA0MjE3Ni85OTA3NzEzMDQ5NTEwNzQ4MTYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85OTA3NzExMDc3ODEwNDIxNzYvOTkwNzcxNDg5NjA1MzAwMjQ1L3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzL2I3LzhhL2ZiL2I3OGFmYmIzZDU0MmZlZDQwY2VmNjkwODE0ZWZlMDk5LmdpZlwiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTIxMDAxNTg0ODg2MzYvMEEwRkNCRDMtNzQ1RS00RDVCLTk3MjEtMDIyRTUwQUUxODVBLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyMTAwNDM1Mjk2Mjc2LzBCNEJBRDRBLTBDRjUtNDNGNi05MkJBLTE3OTY3QTNDNkFBN18xXzEwNV9jLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyMTAwOTM4NjMzMjc3LzBCRjQ1Qjk5LTQwMjEtNDlEMy1CMkJELTZBODMzQ0U0RkFDQV8xXzEwNV9jLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyMTAxMjU3MzgzOTU2LzBDNjc1RjVFLUMwOUMtNEZENS1BMzkzLTJGRTY4NTIzOTNBRl8xXzEwNV9jLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyMTAxNTM4NDE0NjAyLzBDQ0M0NzNGLUVCQjctNEVERi1BQjQzLTkxMkEyMkQ2NUIyOF8xXzEwNV9jLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyMTAxODM2MTkzOTIyLzBEQTM5NTA1LTdGQUItNEQxMS1CRTEyLTcxNzFFOTM1RTRDNy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5MjEyMTIyMjI4NzUwMS8wRUExQ0ZCMi01Q0U1LTRGMEYtQTBDMC1CQzJBRDc4NTU1MTBfMV8xMDVfYy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5MjEyMjM2MzEyMTcxNS8xRDk3RjRCRC04NEZGLTQwOTAtQUU3MC0zNDM5RDY1RTUyRjJfMV8xMDVfYy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5MjEyMjg5NTgxNDc1Ni8xREU4Q0REOC1CRDIxLTQ4N0QtOTYxOS1FQUIwNTFERENCQjJfMV8xMDVfYy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5MjEyMzE0NzQ2ODkxMC8xRUZBNkU0Mi1BODJFLTQ2RkUtQTU1Ri0yNEE5QTc0M0JCREZfMV8xMDVfYy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5MjEyMzQwNzUwMzQyMC8xRjc3QzQzMi1BNkQ5LTQwMkItODkzMy01Qjg4MDVDRjg5QUZfMV8xMDVfYy5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTkwMjgwNDc1ODU3Nzg4OTg4Lzk5Mzk5MTE4MzMwOTIxNzgzMi91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTYxMTQyMjE3MTQ2NDA5NjYvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk2MTU3NDcyMTkwNTA1MTAxL3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NjE1Nzc0ODYxMTkyODExNC91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4ODk4NTU2NzQ2MTExMzk1Ny85OTYwMzk3NDMwNDMyNzI3NTUvdW5rbm93bi5wbmdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk2MTU4MTAzMzcwMzQyNDkyL3Vua25vd24ucG5nXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NjE1Nzk2ODQwMTg0NjM3Mi91bmtub3duLnBuZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS8xMDExMjc5Nzg0MjU4NTcyMzA4LzNiZDYwNmVkMzM4YTdhNmVmYzZhODVkODc5OWM4MmY1LmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyNzYxODAxNTU2MTQwL0E0RUIyMDI1LTkyMEQtNDkyMC1CQTY2LUYzOTIxMkNCRjQ1Nl8xXzEwMl9vLmpwZWdcIixcbiAgXCJodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy85ODk2NDYzNTg0MjYyOTY0MDEvOTk0OTkyNzYyMjAwMDA2Njk2L0E1QTM0MkM1LUFBRUItNEQ4MS1CMEVFLTM1Q0Y0QUEzMEJDOC5qcGVnXCIsXG4gIFwiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTg5NjQ2MzU4NDI2Mjk2NDAxLzk5NDk5Mjc2MTE3NjU5MjU1NS83MjY5MzA5Ny00OEU2LTQ1RDQtOEFDQS1BMjkyRUExRDE2RUIuanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI3NjA5MjQ5NTA2MzgvNTA5OTYxNDUtRjhCMS00MDEyLUJGQzYtOEQ3NkE5RkQ2MzEwXzFfMTAyX28uanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI1NTYzMDU4MjU4NjIvMjIyOTYxRjUtRTdGNy00QjY1LUFFRDktQTYwNTA3MzE0RTFEXzFfMTAyX28uanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI1NTYwMjA2MDA5MTIvNjc2NTVFQ0YtRTJDQS00ODU3LUFDRUUtQzRBMTY1NjNDREEwXzFfMTA1X2MuanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI1NTU3MTg2MTUxNDEvNTcyMjlDQTctMzUyMS00MjIzLUFEOUMtMEVDOENFRDUxN0YzXzFfMTA1X2MuanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI1NTU0NTg1ODA1MjAvNTcyMThCMjUtM0Y4NC00OUE4LThCNUItQUMxMEQ4MDgzNEM5XzFfMTA1X2MuanBlZ1wiLFxuICBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzk4OTY0NjM1ODQyNjI5NjQwMS85OTQ5OTI1NTUxOTAxMjg2NzAvMjM5OTFFMTYtRTNCRi00QUQ5LTgyNjktMjU1OTY5ODYxRTY5XzFfMTA1X2MuanBlZ1wiLFxuXTtcblxuZXhwb3J0IGNvbnN0IGhvcm55SW1hZ2VzID0gW1xuICBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9tZWRpYS9GV2pIWUpLWGdBY2UxeXouanBnXCIsXG4gIFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL21lZGlhL0ZXM0hQOGdYRUFJN1lubS5qcGdcIixcbl07XG4iXX0=