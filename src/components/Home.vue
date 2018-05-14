<template lang="html">
  <div id="quartier">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">The KYT game</h4>
                            <h6 class="text-muted card-subtitle mb-2">Have fun exploring the town</h6>
                            <p class="card-text">Through a series of achievements, you'll be exploring and discovering the best spots in town. Combining the fun and exploration, KYT takes you to places you’d never know to visit.</p>
                            <a class="card-link" href="#">Unlock the adventure!</a><a class="card-link" href="#">Tell me more</a></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Social hub</h4>

                            <h6 class="text-muted card-subtitle mb-2">Share the fun</h6>
                            <p class="card-text">Had fun somewhere in town ? Tell us about it by sharing a tweet on the social hub. Wanna know what's up in your neighbourhood ? Go check it out, it's all free.</p>
                            <a class="card-link" href="#">Let's do it !</a><a class="card-link" href="#">Tell me more</a></div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row">
              <div class="col-md-12">
                <h3 class="h3 text-center">What's new in</h3>
                <select class="form-control" v-model="itemSelected"><!-- A remplacer par la liste dynamique -->
                   <option  v-for="item in dynamiqueList" v-bind:value="item">{{item.name}}</option>
                </select>
              </div>
            </div>
            <br/><br/>
            <div class="row">
              <div class="col-md-12">
                <div class="btn-group col-md-12" role="group" aria-label="..."><!-- A remplacer par les vraies valeurs selon le quartier -->

                  <button type="button" class="col-md-3 btn btn-warning">Temperature : {{itemSelected.sensorsData.temp}}°C</button>
                  <button type="button" class="col-md-3 btn btn-dark">Humidity : {{itemSelected.sensorsData.humid}}%</button>
                  <button type="button" class="col-md-3 btn btn-success">Air quality : {{itemSelected.sensorsData.gaz}}</button>
                  <button type="button" class="col-md-3 btn btn-default">Luminosity : {{itemSelected.sensorsData.light}} Lux</button>
                </div>
              </div>
            </div>
            <br/><br/>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-4">
                 <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 1</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">Hi, my name is Jeff ! #ThatsAMovieReference</p>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 2</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">Et là vous avez des tweets... #çaBosseProjetMobile</p>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 3</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">Hellooooo ! #JeSuisNouveauIci</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-4">
                 <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 4</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">A mon avis ça va être juste juste #RendezVousAout2018</p>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 5</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">-50% sur toutes les boissons au monde à l'envers ! #GoGoGo</p>
                    </div>
                  </div>
                  </div>
                  <div class="col-md-4">
                  <div class="card text-white bg-info mb-3" style="">
                    <div class="card-header">Tweet 6</div>
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text">C'est quoi ce tag "Projacquet" sur la facade de la fac info ? #OohçaMaLairChelou</p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
         </div>
    </div>

</template>

<script>
import axios from 'axios'
export default {
  //Ajouter un dropdown qui permettra de récupérer les quartiers et de sélectionner le quartier souhaité
  name:'quartier',
  data() {
    return {
      dynamiqueList: [],
      itemSelected:{},
      tweets:[]
    }
  },
  methods:{
    changeSensors : function (sensors) {
      var vm = this
      axios.get('http://groupe2.cslabs.be/open/neighbourhoods/#'+vm.itemSelected, {crossdomain:true}).then(function (response2) {
        response2.data.forEach(function (item2) {
          if(item2.name == vm.itemSelected){
            console.log('je suis là')
            var quartier = item2
            quartier.sensors.forEach(function(item) {
              console.log(item)
              switch (item.sType) {
                case 1:
                  sensors.temp = item.value;
                  break;
                case 2:
                  sensors.light = item.value;
                  break;
                case 5:
                  if (item.value < 800) {
                    sensors.gaz = 'Good'
                  } else {
                    if (item.value > 1200) {
                      sensors.gaz = 'Bad'
                    } else {
                      sensors.gaz = 'Middle'
                    }
                  }
                  ;
                  break;
                case 6:
                  sensors.humid = item.value;
                  break;
              }
            })
          }
        })
        })
      }
    },
  created: function(){
    var vm = this;
    axios.get('http://groupe2.cslabs.be/open/neighbourhoods/names', {crossdomain:true}).then(function (response) {
      response.data.list.forEach(function (item) {
        vm.dynamiqueList.push({name:item})
      })


    })

    axios.get('http://groupe2.cslabs.be/open/neighbourhoods/#'+vm.itemSelected, {crossdomain:true}).then(function (response2) {
      for(var i = 0; i<response2.data.length; i++) {
        vm.dynamiqueList[i].sensorsData = {}
        response2.data[i].sensors.forEach(function (item) {
          switch (item.sType) {
            case 1:
              vm.dynamiqueList[i].sensorsData.temp = item.value;
              break;
            case 2:
              vm.dynamiqueList[i].sensorsData.light = item.value;
              break;
            case 5:
              if (item.value < 800) {
                vm.dynamiqueList[i].sensorsData.gaz = 'Good'
              } else {
                if (item.value > 1200) {
                  vm.dynamiqueList[i].sensorsData.gaz = 'Bad'
                } else {
                  vm.dynamiqueList[i].sensorsData.gaz = 'Middle'
                }
              }
              ;
              break;
            case 6:
              vm.dynamiqueList[i].sensorsData.humid = item.value;
              break;
          }
        })
      }
      vm.itemSelected = vm.dynamiqueList[0];
    })
  }
}
</script>

<style lang="css">
</style>
