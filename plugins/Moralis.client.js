import {Moralis} from 'moralis';






Moralis.start({ 
    serverUrl: "https://iznaf9tkeppc.usemoralis.com:2053/server", 
    appId: "IeEHxKBoT5Nrg0OkxdmOVqvXiJ5ufzUt5r6Cgc3M" 
});

Moralis.Web3.getSigningData = () => 'Welcome to Wall Me'