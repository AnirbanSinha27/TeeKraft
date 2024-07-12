import { proxy } from "valtio";

const state=proxy({
    intro:true,
    color:"#88E263",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"./TeeKraft.png",
    fullDecal:"./TeeKraft.png"
})

export default state