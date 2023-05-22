import { useReducer } from "react";
import { CampaignData } from "./data";
import { CampaignTable } from "./CampaignTable";
import { TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import NumbersIcon from "@mui/icons-material/Numbers";
import { Percent } from "@mui/icons-material";
import { campaignComparator } from "./utils";

interface CampaignsState {
  orderBy: keyof CampaignData;
  orderDir: "asc" | "desc";
  campaigns: CampaignData[];
  filterBy?: keyof CampaignData;
  filter: string;
  numericRep: "number" | "percentage";
}

type CampaignsAction =
  | {
      type: "orderBy";
      column: keyof CampaignData;
    }
  | {
      type: "filterBy";
      column: keyof CampaignData;
      value: string;
    }
  | {
      type: "toggleNumbericRep";
      value: "number" | "percentage";
    };
function reducer(
  state: CampaignsState,
  action: CampaignsAction
): CampaignsState {
  switch (action.type) {
    case "orderBy": {
      const nextOrderDir = state.orderDir === "asc" ? "desc" : "asc";

      return {
        ...state,
        orderBy: action.column,
        orderDir: nextOrderDir,
      };
    }
    case "filterBy": {
      return {
        ...state,
        filterBy: action.column,
        filter: action.value,
      };
    }
    case "toggleNumbericRep": {
      return {
        ...state,
        numericRep: action.value,
      };
    }
    default: {
      // Return never type as default to ensure we implemented all actions
      const _never: never = action;
      return _never;
    }
  }
}
export const Campaigns: React.FC<{ campaigns: CampaignData[] }> = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    campaigns: props.campaigns,
    filter: "",
    numericRep: "number",
    orderBy: "start_date",
    orderDir: "asc",
  });

  let displayCampaigns = state.campaigns;
  if (state.filter !== "" && state.filterBy) {
    displayCampaigns = [...state.campaigns].filter((campaign) =>
      String(campaign[state.filterBy!]).toLowerCase().includes(state.filter)
    );
  }
  displayCampaigns = displayCampaigns.sort(
    campaignComparator(state.orderBy, state.orderDir, state.numericRep)
  );
  return (
    <div>
      <div className={"campaign-table-controls"}>
        <TextField
          id="campaign-search"
          label={"Filter by Campaign"}
          variant={"outlined"}
          onChange={(e) =>
            dispatch({
              type: "filterBy",
              column: "name",
              value: e.target.value,
            })
          }
        />
        <ToggleButtonGroup
          color="primary"
          value={state.numericRep}
          exclusive
          onChange={(e, value) =>
            dispatch({
              type: "toggleNumbericRep",
              value: value as "number" | "percentage",
            })
          }
        >
          <ToggleButton value={"number"}>
            <NumbersIcon />
          </ToggleButton>
          <ToggleButton value={"percentage"}>
            <Percent />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <CampaignTable
        data={displayCampaigns}
        orderedBy={state.orderBy}
        orderedDir={state.orderDir}
        handleSortClick={(column) => dispatch({ type: "orderBy", column })}
        numericRep={state.numericRep}
      />
    </div>
  );
};
