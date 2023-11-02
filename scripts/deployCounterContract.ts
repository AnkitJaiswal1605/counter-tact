import { toNano } from 'ton-core';
import { CounterContract } from '../wrappers/CounterContract';
import { NetworkProvider } from '@ton-community/blueprint';

async function deployCounterContract(provider: NetworkProvider, valueInTON: number, queryId: bigint = 0n) {
    try {
        const contractId = 36427n; // Replace with the actual contract ID

        const counterContract = await CounterContract.fromInit(contractId);
        const senderAddress = provider.sender();
        const nanoValue = toNano(valueInTON);

        await counterContract.send(senderAddress, { value: nanoValue }, { $$type: 'Deploy', queryId });

        await provider.waitForDeploy(counterContract.address);

        return counterContract;
    } catch (error) {
        console.error('Error deploying counter contract:', error);
        throw error; // Re-throw the error for handling at a higher level
    }
}

export async function run(provider: NetworkProvider) {
    try {
        const counterContract = await deployCounterContract(provider, 0.05);

        // Run methods on `counterContract`

    } catch (error) {
        console.error('Error in run function:', error);
        // Handle the error or log it as needed
    }
}
