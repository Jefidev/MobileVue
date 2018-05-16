<template lang="html">
  <div>
        <div class="container">
            <br/>
            <h1 class="h1 text-center">KYT API Documentation</h1>
            <br/><br/>
            <h2 class="h2 text-left">Open Data</h2><br/>
            <div class="row">
              <div class="col-md-12 card-deck">
                <div class="col-md-6">
                 <div class="card text-white border-info mb-3">
                    <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods</div>
                      <div class="card-body text-dark">
                        <h5 class="card-title"></h5>
                        <p class="card-text">
                          Body : <code class="json">empty</code><br/>
                          Result : <code class="json">[{name:String, points:[{lat:Float, longi: Float}]}]</code>
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
                          Result : <code class="json">{name: String, description: String, sensors:[{sType:int, name:String, value:Float, dead:boolean}]</code>
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
                          Result : <code class="json">[{name: String, description: String, points:[{lat:Float, longi:Float}] ,sensors:[{sType:int, name:String, value:Float, dead:boolean}], hub:{lat:float, longi:float}]</code>
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
                  <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods/{name}</div>
                    <div class="card-body text-dark">
                      <h5 class="card-title"></h5>
                      <p class="card-text">
                        Body : <code class="json">empty</code><br/>
                        Result : <code class="json">{name: String, description: String, sensors:[{sType:int, name:String, value:Float, dead:boolean}]}</code>
                        </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
               <div class="card text-white border-info mb-3">
                  <div class="card-header text-dark"><span class="badge badge-primary">GET</span>&nbsp;&nbsp; /open/neighbourhoods/names</div>
                    <div class="card-body text-dark">
                      <h5 class="card-title"></h5>
                      <p class="card-text">
                        Body : <code class="json">empty</code><br/>
                        Result : <code class="json">{list:["name1", "name2"]}</code>
                        </p>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <br/><br/>
                </div>
            </div>

</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
