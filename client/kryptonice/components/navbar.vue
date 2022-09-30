<template lang="">
    <div class="position-fixed">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent text-white">
      <a class="navbar-brand text-white text-gradient" style="font-size: 1.5rem; font-weight: bold" href="/">Kryptonice</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <button @click="connectWallet()"class="btn btn-outline-success my-2 my-sm-0" type="submit">
            {{currentAccount}}
          </button>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>
<script>
if (process.browser) {
  const { ethereum } = window;
}

export default {
  async mounted() {
    if (process.browser) {
      if (!ethereum){
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });

      try {
        if (accounts.length) {
            console.log(accounts);
            this.currentAccount = accounts[0]

          // getAllTransactions();
        } else {
          console.log("No accounts found");
        }
      } catch (error) {
        console.log(error);

        throw new Error("NO ETHEREUM OBJECT");
      }
    }
  },
  data() {
    return {
        currentAccount: "Connect Wallet"
    };
  },
  methods: {
    setCurrentAccount(account) {
      this.currentAccount = account;
    },
    async connectWallet() {
      try {
        if (!ethereum) return alert("Please install metamask");
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        this.setCurrentAccount(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>