export default function CartDrawer({ items, onClose }) {
  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-black">
          &times;
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-4">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">{item.variant}</p>
            </div>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <button className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600">
          Checkout
        </button>
      </div>
    </div>
  );
}
