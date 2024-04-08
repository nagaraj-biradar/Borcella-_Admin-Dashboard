"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import React, { useState } from "react";

interface MultiSelectProps {
  placeholder: string;
  value: string[];
  collections: CollectionType[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  collections,
  onChange,
  onRemove,
  placeholder,
  value,
}) => {
  const [inputValue, setinputValue] = useState("");
  const [open, setOpen] = useState(false);
  console.log(collections);
  return (
    <Command className=" overflow-visible bg-white">
      <CommandInput
        placeholder={placeholder}
        value={inputValue}
        onValueChange={setinputValue}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
      />

      <div className=" relative mt-2">
        {open && (
          <CommandList>
            <CommandGroup className=" absolute top-0 w-full z-10 overflow-auto border rounded-md shadow-md   ">
              {collections?.map((collection) => (
                <CommandItem key={collection._id}>
                  {collection.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        )}
      </div>
    </Command>
  );
};

export default MultiSelect;
