<template lang="html">
  <div>
        <div class="container">
            <br/>
            <h1 class="h1 text-center">KYT API Documentation</h1>
            <br/><br/>
            <h2 class="h2 text-left">Achievements</h2><br/>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /login</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{ success: boolean, rfid:String }</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /rfid</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{payload:"rfid"}</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-success">POST</span>&nbsp;&nbsp; /rfid/{rfidString}</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{payload:"rfid"}</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /achievements</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">[{id:"id", name:"string", desc:"description", done:Boolean, points:int}]</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /achievement/detail/#idAchievement</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{achievement:{id:int, name:"string", description:"string", done:Boolean, point:int},   events:[{id:int, name:string, description:string, done:boolean}]}</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-success">POST</span>&nbsp;&nbsp; /achievement/read/#idEvent</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">{secret:String}</code><br/>
                          Result : <code class="json">[{id:"id", name:"string", desc:"description", done:Boolean, points:int}]</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <br/><br/>

            <h2 class="h2 text-left">Neighbourhoods</h2><br/>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /neighbourhoods</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">[{id:idQuartier, name:"Nom quartier", description:"description_quartier"}]</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /neighbourhood/{quartierString}</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{name: String, description: String, sensors:[{sType:int, name:String, value:Float}]</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /profile/neighbourhood</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">{payload:"Nom quartier"}</code>
                        </p>
                      </div>
                    </div>
                  </div>
                 </div>
            </div>
            <br/><br/>

            <h2 class="h2 text-left">Orchestrator (Sensors data)</h2><br/>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-success">POST</span>&nbsp;&nbsp; /orchestrator/value</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">{id: idSensor, lastVal: value}</code><br/>
                          Result : <code class="json">200</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-success">POST</span>&nbsp;&nbsp; /orchestrator/achievement/read/#idEvent</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">{idRfid: String, secret:String}</code><br/>
                          Result : <code class="json">{code:Int, payload:String}</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-success">POST</span>&nbsp;&nbsp; /orchestrator/achievement/write/#idEvent</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">{idRfid: String, secret:String}</code><br/>
                          Result : <code class="json">{code:Int, payload:String}</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                <br/><br/>

                <h2 class="h2 text-left">Neighbourhoods (Open data)</h2><br/>
                <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">[{id:idQuartier, name:"Nom quartier", description:"description_quartier"}]</code>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods/info</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">{lat:Float, longi:Float}</code><br/>
                          Result : <code class="json">{name: String, description: String, sensors:[{sType:int, name:String, value:Float}]</code>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods/all</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">[{name: String, description: String, points:[{lat:Float, longi:Float}] ,sensors:[{sType:int, name:String, value:Float}], hub:{lat:float, longi:float}]</code>
                        </p>
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

}
</script>

<style lang="css">
</style>
