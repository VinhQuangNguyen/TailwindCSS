import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const MultiSelect = ({
  options = [],
  value = [],
  onChange,
  placeholder = "Select options...",
  label = "",
  disabled = false,
}) => {
  const [query, setQuery] = useState("");

  // Filter options based on search query
  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );

  const handleOnChange = (newSelectedOptions) => {
    const uniqueOptions = newSelectedOptions.filter(
      (option, index, self) =>
        index === self.findIndex((o) => o.value === option.value)
    );
    onChange(uniqueOptions);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <Combobox
          value={value}
          onChange={handleOnChange}
          multiple
          disabled={disabled}
        >
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <div className="flex flex-wrap gap-1 p-1">
                {/* Display selected tags */}
                {value.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800"
                  >
                    {option.label}
                    <button
                      type="button"
                      onClick={() => {
                        const newSelectedOptions = value.filter(
                          (selectedOption) =>
                            selectedOption.value !== option.value
                        );
                        onChange(newSelectedOptions);
                      }}
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 focus:outline-none"
                    >
                      <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>
                ))}

                {/* Search input */}
                <input
                  className="m-1 block w-full rounded-md border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={value.length === 0 ? placeholder : ""}
                  autoComplete="off"
                />

                {/* Dropdown button */}
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
            </div>

            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredOptions.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.value}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-3 pr-9 ${
                        active ? "bg-blue-600 text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected && (
                          <span
                            className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                              active ? "text-white" : "text-blue-600"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default MultiSelect;
