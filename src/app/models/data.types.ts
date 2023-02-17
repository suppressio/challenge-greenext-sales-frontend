export interface Article {
  id: number,
  name: string,
  category: string,
  price: number,
  isImported: boolean,
  isBasicSales: boolean,
  salesTaxes: number,
  isHovered?:boolean
}

export interface ShoppingCart{
  id: number,
  arts: ShoppedArticle[];
  totPrice: number,
  totSalesTaxes: number
}

export interface ShoppedArticle{
  id: number,
  art: Article,
  qty: number,
  subTotPrice: number,
  subTotSalesTaxes: number
}

export interface Receipt{
  rows: ReceiptRow,
  totPrice: number,
  totSalesTaxes: number
}

export interface ReceiptRow{
  text: Article,
  qty: number,
  subTotPrice: number
}
