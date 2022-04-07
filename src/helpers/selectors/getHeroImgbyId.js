export const getHeroImgById = (id) => {
    const heroImage = require.context('../../assets/heroes', true)

    return heroImage(`./${id}.jpg`)
}