export default function Tab({ item, onClick, tabbedItem }) {
  return (
    <div>
      <button
        className={`tab ${tabbedItem.id === item.id ? "active" : ""}`}
        onClick={() => {
          onClick();
        }}
        // style={{ backgroundColor: tabbedItem.id === item.id ? "green" : null }}
      >
        Tab {item.id}
      </button>
    </div>
  );
}
