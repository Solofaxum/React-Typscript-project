import { Col, Row } from "react-bootstrap"
import StoreItems from "../data/items.json"
import {StoreItem} from '../components/StoreItem'
export function Store(){
return (
<>
<p>Storage page </p>
<Row md={2} xs={1} lg={3} className="g-3">
    {StoreItems.map(item=>(
<Col index={item.id}><StoreItem{...item} /></Col> 
    ))}
    
</Row>
</>
    
)
}
//{/* <Col index={item.id}>{JSON.stringify(item)}</Col> */}
