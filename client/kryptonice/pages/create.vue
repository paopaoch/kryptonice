<template>
  <div class="gradient-bg-welcome container-fluid" style="height: 100vh">
    <Navbar />
    <div class="row" style="height: 100%">
      <div class="col-6 offset-3">
        <div
          class="justify-content-center align-items-center d-flex"
          style="height: 100%"
        >
          <div class="card kryptonice-card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Enter Account Details:</h5>
              <div class="card-text row my-4">
                <div class="col-3">
                  <label for="accountName">Account Name:</label>
                </div>
                <div class="col-9">
                  <input
                    type="email"
                    class="form-control bg-transparent"
                    id="accountName"
                    aria-describedby="accountName"
                    placeholder="Enter Account Name"
                  />
                </div>
              </div>
              <div class="row">
                <div
                  class="
                    col-12
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <NuxtLink to="/">
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Create
                    </button></NuxtLink
                  >
                </div>
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
  name: "CreatePage",
};
</script>
<style>
</style>