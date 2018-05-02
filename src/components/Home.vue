<template lang="html">
  <div>
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
                <select class="form-control"><!-- A remplacer par la liste dynamique -->
                  <option>Bouge</option>
                  <option>Flawinne</option>
                  <option>Jambes</option>
                  <option>Saint-servais</option>
                </select>
              </div>
            </div>
            <br/><br/>
            <div class="row">
              <div class="col-md-12">
                <div class="btn-group col-md-12" role="group" aria-label="..."><!-- A remplacer par les vraies valeurs selon le quartier -->
                  <button type="button" class="col-md-3 btn btn-warning">Temperature : 25°C</button>
                  <button type="button" class="col-md-3 btn btn-dark">Humidity : 30%</button>
                  <button type="button" class="col-md-3 btn btn-success">Air quality : Good</button>
                  <button type="button" class="col-md-3 btn btn-default">Luminosity : 250 Lux</button>
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
export default {
  //Ajouter un dropdown qui permettra de récupérer les quartiers et de sélectionner le quartier souhaité
}
</script>

<style lang="css">
</style>
