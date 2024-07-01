import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#000000',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: '/heisenberg.png',
    fullDecal: '/zebra.jpg'
});

export default state;