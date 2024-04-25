import { Input, Button } from "antd";
import { Localize } from "components/service";
import Icons from "components/icons";
import "./multi-select.scss";

const MultiSelect = ({
  name = "",
  disableBtn = false,
  disableSearch = false,
  extraFields = false,
  extraClass = "",
  formReset = () => {},
  formResetConfirm = () => {},
  setBtnConfirm = () => {},
  clearLocalStore = () => {},
  children,
  action,
  placeholder = Localize({ children: "SEARCH.Input_Placeholder_MultiSelect" })
    .props.children,
  setSearch,
  search = undefined,
  onCancel = () => {},
  onConfirm = () => {},
}) => {
  return (
    <div className={`multi-select ${extraClass}`}>
      {extraFields && extraFields}

      {!disableSearch && (
        <Input.Search
          value={search}
          className="filter-search"
          prefix={<Icons.Search />}
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      <div className="holder-group-select">
        <span className="line-top"></span>

        <div className="inner" style={{ height: "267px", overflowY: "auto" }}>
          {children}
        </div>

        <span className="line-bottom"></span>
      </div>

      {!disableBtn && (
        <div className="form-btn-holder">
          <Button
            className="light-bg"
            onClick={() => {
              clearLocalStore();
              formReset();
              setBtnConfirm({
                [name]: false,
              });
              setSearch("");
              onCancel();
              onConfirm();
              action();
            }}
          >
            <Localize>GLOBAL.Button_Text_Cancel</Localize>
          </Button>
          <Button
            className="btn-right"
            type="primary"
            onClick={() => {
              setBtnConfirm({
                [name]: true,
              });
              formResetConfirm();
              action();
            }}
          >
            <Localize>GLOBAL.Button_Text_Confirm</Localize>
          </Button>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
