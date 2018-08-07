<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form ref="form" v-model="valid" validation class="mb-3">
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            required
          ></v-text-field>
          <v-textarea
            box
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
          ></v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn
              color="blue-grey"
              class="white--text"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100px">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Ad to promo?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer>
              <v-btn
                :disabled="!valid"
                class="success"
                @click="createAd"
              >Create ad</v-btn>
            </v-spacer>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad)
        }
      }
    }
  }
</script>

<style scoped>

</style>







