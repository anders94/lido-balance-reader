# lido-balance-reader

Reads the stETH balance of a given address. (or a popular whale address if one isn't given)

## Prerequisites

* Node.js
* Access to a full ETH node (defaults to `http://localhost:8545`)

## Setup

```
git clone https://github.com/anders94/lido-balance-reader
cd lido-balance-reader/
npm install
```

## Run
Using a local ETH node at `http://localhost:8545`:
```
node app 0x7153d2ef9f14a6b1bb2ed822745f65e58d836c3f
```

Specify `http://example.com:8545` as an ETH endpoint:
```
URI=http://example.com:8545 node app 0x7153d2ef9f14a6b1bb2ed822745f65e58d836c3f
```

## Output
```
Sat, 17 Dec 2022 04:00:01 GMT balance 59416.3961092668570237 shares 53969.391556769290368068 totalPooledEther 4807173.129287314948053176 totalShares 4366475.011688289253384975
```
