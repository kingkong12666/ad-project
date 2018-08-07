export default {
  state: {
    ads: [
      {title: 'wq erw',
        description: 'qwertyghnfbdsf',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      },
      {title: 'wq erwolikmujnyhbtg',
        description: 'qwertyghnfbdsfwaesrdfghjkhmgnfbd',
        promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: '1234'
      },
      {title: 'wq erwalallalalalala',
        description: '[poiujhgfd',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'cdwfvg'
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
