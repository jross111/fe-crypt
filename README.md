# README

## Cryptrader will allow a user to trade simulate buying and selling various cryptocurrencies for USD.

### The app will keep track of available USD to trade as well ass their current balance in each cryptocurrency and their overall value in combined USD.

### A user will be able to see their trade history as will as various stats on their current holdings.

### The app will use a rails backend with postgres db and a react front end.

### Real time market prices will be used in real time from various market APIs (ex: blockchain.info API)

## Skateboard:
![skateboard](https://i.snag.gy/tQZi2I.jpg)
---
![transactions](https://snag.gy/18YK3S.jpg)

## Stretch Mockup:
![stretch mockup](https://i.snag.gy/zVRFs7.jpg)

---
[Back End Repo](https://github.com/jross111/Crypvestor)
---
[Front End Repo](https://github.com/jross111/FE-Cryptrader-React)


user_table:
  -username
has_many: transactions

account:
-user_id: foreign_key
-usd: decimal
-btc: decimal

  belongs_to: user

transaction table:
-user_id: foreign_key
-usd_change: decimal
-btc_change: decimal
-approved: boolean
