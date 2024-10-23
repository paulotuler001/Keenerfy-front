import Header from "../../components/Header";
import ListTable from "../../components/ListTable";

const PurchaseOrder = () =>{
    const columns = ['BARCODE', 'NAME', 'QUANTITY'];
    const data = [
        { BARCODE: '1', NAME: 'Item 1', QUANTITY: '10.99' },
        { BARCODE: '2', NAME: 'Item 2', QUANTITY: '23.50' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
        { BARCODE: '3', NAME: 'Item 3', QUANTITY: '99.99' },
    ];

    return (
        <div>
            <Header/>
            <ListTable title="PURCHASE ORDER" columns={columns} data={data}/>
        </div>
    )
}

export default PurchaseOrder