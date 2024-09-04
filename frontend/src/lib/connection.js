import Web3 from "web3";
import Overtime from "@/abi/Overtime.json";

const CONTRACT_ABI = Overtime;
const CONTRACT_ADDRESS = "0x599F1E0fff5f6E4d6e271437Cb2B54d8b5b39232";
const INFURA_RPC =
  "https://sepolia.infura.io/v3/8409f54447114f4ab2264b1f9ae7bdab";

export const getUserAccount = async () => {
  if (window.ethereum) {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      return null;
    }
  } else {
    console.warn("MetaMask not detected. Please install MetaMask.");
    return null;
  }
};

export const getContract = () => {
  const web3 = new Web3(INFURA_RPC);
  const Contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  Contract.handleRevert = true;
  return Contract;
};

export const getAdmin = async () => {
  const contract = getContract();
  try {
    const admin = await contract.methods.admin;
    console.log(contract)
    console.log(admin);
    return admin;
  } catch (error) {
    console.error("Error fetching admin from contract:", error);
    return null;
  }
};

export const addTask = async (task) => {
  // const levelMapping = {
  //   beginner: 1,
  //   intermediate: 2,
  //   advanced: 3
  // };
  // const contract = getContract();
  // const userAccount = await getUserAccount(); 
  // try {
  //   if (!task || !task.estimatedHours || !task.wage) {
  //     throw new Error("Incomplete task information.");
  //   }

  //   const gasEstimate = await contract.methods
  //     .registerWorker(task.estimatedHours,levelMapping[task.skillLevel], task.wage)
  //     .estimateGas({ from: userAccount });

  //   const transaction = await contract.methods
  //     .registerWorker(task.estimatedHours, task.wage)
  //     .send({ from: userAccount, gas: gasEstimate });

  //   console.log("Task successfully added to blockchain:", transaction);
  //   return transaction;
  // } catch (error) {
  //   console.error("Error while adding task to chain:", error);
  // }
//   const taskData = {
//     time,
//     expertise,
//     dependencies: dependencies.split(",").map(dep => dep.trim()), // convert comma-separated dependencies to array
//     wage,
//     deadline,
//     divisible,
//   };

//   try {
//     const response = await fetch("http://localhost:3001/addTask", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(taskData),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert("Task added successfully: " + data.transactionHash);
//     } else {
//       alert("Failed to add task: " + data.error);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Error adding task.");
//   }
// };
};
