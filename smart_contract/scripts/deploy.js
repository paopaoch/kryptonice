const main = async () => {

  const kryptonice = await hre.ethers.getContractFactory("kryptonice");
  const kryptonice_deploy = await kryptonice.deploy();

  await kryptonice_deploy.deployed();

  console.log("Transactions deployed to:", kryptonice_deploy.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();