import electronics from 'assets/images/electronics.jpg'
import perishables from 'assets/images/perishables.jpg'
import furniture from 'assets/images/furniture.jpg'
import warehouse from 'assets/images/warehouse.jpg'
import goods from 'assets/images/goods.jpeg'
import air from 'assets/images/air.jpg'
import sea from 'assets/images/sea.jpg'

export const SERVICES_ = [
  {id: 1, label: 'perishables', value: '', image: perishables},
  {id: 2, label: 'electronics', value: '', image: electronics},
  {id: 4, label: 'furniture', value: '', image: furniture},
  {id: 3, label: 'goods', value: '', image: goods},
]

export const SOLUTION_ = [
  {label: 'air freight', value: 'When it comes to time-sensitive shipments or those requiring fast delivery, our air freight services are the perfect solution. We have established strong partnerships with leading airlines, allowing us to provide reliable and efficient air transportation for your goods. With our expertise in air freight logistics, we ensure that your shipments are handled with utmost care and delivered promptly to their destination, no matter the distance.', image: air},
  {label: 'sea freight', value: `If you have large or bulky shipments, or you're looking for a cost-effective solution for international shipping, our sea freight services are ideal. We offer comprehensive sea freight options, leveraging our extensive network of reliable shipping carriers and strategically optimizing routes. With our expertise in sea freight logistics, we provide competitive pricing, flexible scheduling, and efficient handling to ensure the smooth transportation of your cargo by sea.`, image: sea},
  {label: 'warehousing', value: `In addition to our freight services, we also provide secure and efficient warehousing solutions. Our state-of-the-art warehouses are equipped with advanced inventory management systems and round-the-clock security measures. Whether you need short-term storage or long-term warehousing, we offer customizable solutions to meet your specific requirements. With our warehousing services, you can efficiently manage your inventory, reduce overhead costs, and improve supply chain efficiency.`, image: warehouse},
]