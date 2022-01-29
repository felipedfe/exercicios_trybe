const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let pedido = order; 
    console.log(`Olá ${pedido.order.delivery.deliveryPerson}, entrega para ${pedido.name}, telefone ${pedido.phoneNumber}, endereço ${pedido.address.street}, ${pedido.address.number}, apt. ${pedido['address']['apartment']}.`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    let pedidoLuiz = {}
    Object.assign(pedidoLuiz, order)
    pedidoLuiz.name = 'Luiz Silva'
    pedidoLuiz.payment.total = 50;
    let saborPizza = Object.keys(pedidoLuiz.order.pizza);
    let bebida = pedidoLuiz.order.drinks.coke.type;
    console.log(`Olá ${pedidoLuiz.name}, o total do seu pedido de ${saborPizza[0]}, ${saborPizza[1]} e ${bebida} é de R$${pedidoLuiz.payment.total},00`)
  
  }
  
  orderModifier(order);
