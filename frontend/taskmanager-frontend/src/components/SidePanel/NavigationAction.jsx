import { Plus } from 'lucide-react';
import React from 'react';
import '../../styles/navigation-action.css';
import ActionTooltip from './ActionTooltip';

function NavigationAction() {
  return (
    <div className="flex items-center space-x-3">
      <ActionTooltip
        side="right"
        align="center"
        label="Add a new project" // Ensure this is a string
      >
        <button className="flex items-center mx-4 my-4 px-2 py-2 bg-yellow-500 rounded-lg font-semibold text-black hover:bg-yellow-600 transition">
          <Plus className="mr-2" size={25} />
          Add Project
        </button>
      </ActionTooltip>
    </div>
  );
}

export default NavigationAction;
