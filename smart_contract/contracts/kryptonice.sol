// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
// import "hardhat/console.sol";

// contract ReceiveEther {

//     // Function to receive Ether. msg.data must be empty
//     receive() external payable {}

//     // Fallback function is called when msg.data is not empty
//     fallback() external payable {}

//     function getBalance() public view returns (uint) {
//         return address(this).balance;
//     }
// }

contract kryptonice {
    address payable kryptonice_account = payable(0x4AC0D8a6486a5dC15b738B720C644F2c603A6324);
    uint kryptonice_balance;

    

    function deposit(uint amount) public payable {
        // kryptonice_balance += msg.value;
        kryptonice_balance += amount;
    }

    function withdraw(address payable _to) public payable {
        // check balance first
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");

        kryptonice_balance -= msg.value;
    }
}