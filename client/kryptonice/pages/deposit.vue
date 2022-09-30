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
              <h5 class="card-title">Enter Deposit Details:</h5>
              <div class="card-text row my-4">
                <div class="col-3">
                  <label for="depositeAmount">Deposit Amount:</label>
                </div>
                <div class="col-9">
                  <input
                    type="email"
                    class="form-control bg-transparent"
                    id="depositeAmount"
                    aria-describedby="depositeAmount"
                    placeholder="Enter Deposit Amount"
                    v-model="amount"
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
                  <!-- <NuxtLink to="/"> -->
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      @click="sendTransaction"
                    >
                      Deposit
                    </button>
                    <!-- </NuxtLink> -->
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
import {ethers} from 'ethers'
import { contractABI, contractAddress } from '@/assets/constants';

if (process.browser) {
  const { ethereum } = window;
}

export default {
  name: "DepositePage",
  data() {
    return {
      amount: "",
      currentAccount: ""
    }
  },
  methods: {
    async sendTransaction() {
      try {
        if (!ethereum) return alert("Please install metamask");
        if (this.amount == "") return alert("Please fill in the form")
        const parsedAmount = ethers.utils.parseEther(this.amount);
        console.log(parsedAmount);
        const accounts = await ethereum.request({ method: "eth_accounts" });
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: accounts[0],
              to: "0x4AC0D8a6486a5dC15b738B720C644F2c603A6324",
              gas: "0x5208", // hex => 21000 Gwei = 0.000021 eth
              value: parsedAmount._hex, // 0.0001
            },
          ],
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
        console.log(transactionContract)

        const transactionHash = await transactionContract.deposit(Number(this.amount) * 10000);
        console.log("processing deposit");
        await transactionHash.wait()
        console.log("deposit complete");
      } catch (error) {
        console.log(error);

        throw new Error("NO ETHEREUM OBJECT");
      }
    },
  },
};
</script>