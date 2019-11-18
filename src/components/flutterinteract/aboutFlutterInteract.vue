<template>
    <v-container class="pa-0 my-0">
        <v-layout wrap align-start justify-start row fill-height class="my-0" >
            <v-flex xs12 sm5 md4 lg4 class="pa-2">
                <v-img
                    :src="require('@/assets/img/flutter-interact.jpg')"
                    :lazy-src="require('@/assets/img/flutter-interact.jpg')"
                    class=""
                    width="100%">
                    <v-layout
                        slot="placeholder"
                        fill-height
                        align-center
                        justify-center
                        ma-0
                    >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                </v-img>
            </v-flex>
            <v-flex xs12 sm7 md8 lg8 class="pa-2 my-0">
                <p class="google-font" style="font-size:120%;">{{FeatureEventDetails.EventDescription}}</p>

                <p class="google-font grey--text mt-3" style="font-size:120%">{{FeatureEventDetails.content}}</p>

                <v-btn :href="FeatureEventDetails.registrationLink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">Request an Invite</v-btn> 
                &nbsp;

                <v-btn href="https://g.co/FlutterInteract" target="_blank" outline color="cyan" style="text-transform: capitalize;border-radius:5px"  class="ml-0" dark>Learn More</v-btn>
                &nbsp;
                <v-btn :href="FeatureEventDetails.rsvplink" target="_blank" class="ma-0 google-font elevation-1" color="#1a73e8" style="text-transform: capitalize;border-radius:5px;color:white">RSVP for the livestream</v-btn> 
            </v-flex> 
           
        </v-layout>

    </v-container>
</template>

<script>
import FeatureEventDetails from '@/assets/data/featureEvent.json'
export default {
    data() {
        return {
            FeatureEventDetails: FeatureEventDetails
        }
    },
}
</script>
