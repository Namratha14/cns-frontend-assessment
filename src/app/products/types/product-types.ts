export interface Products {
    productId : number,
    effectiveFrom? : Date, 
    effectiveTo?: Date, 
    productCategory: string, 
    name: string, 
    description: string, 
    brand: string 
    lastUpdated: Date
 }