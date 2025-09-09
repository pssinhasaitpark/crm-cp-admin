import * as React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Avatar from "@radix-ui/react-avatar";
import dayjs from "dayjs";

export default function Sidebar({ customers, search, setSearch, onSelect, selectedId, themeColor }) {
    return (
        <aside className={`w-1/4 border-r flex flex-col ${themeColor ? 'border-gray-700' : 'border-gray-200'}`}>
            {/* Search */}
            <div className={`p-4 border-b ${themeColor ? 'border-gray-700' : 'border-gray-200'}`}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`w-full p-2 rounded-lg outline-none
            ${themeColor ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-black'}`}
                />
            </div>

            {/* Conversation List */}
            <ScrollArea.Root className="flex-1">
                <ScrollArea.Viewport className="h-full">
                    <ul>
                        {customers
                            .filter((c) =>
                                c.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((customer) => (
                                <li
                                    key={customer._id}
                                    onClick={() => onSelect(customer._id)}
                                    className={`flex items-center gap-3 p-3 cursor-pointer
    ${selectedId === customer._id
                                            ? `${themeColor ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-black'}` // active color
                                            : `${themeColor ? 'hover:bg-gray-800 hover:text-gray-200' : 'hover:bg-gray-100 hover:text-black'}` // hover color
                                        }`}
                                >
                                    <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
                                        <Avatar.Image
                                            src={customer.profile_photo || customer.avatar}
                                            alt={customer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </Avatar.Root>
                                    <div className="flex-1">
                                        <p className="font-medium">{customer.name}</p>
                                        <p className="text-sm truncate text-gray-500 dark:text-gray-400">
                                            {customer.lastMessage}
                                        </p>
                                    </div>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        {dayjs(customer.updatedAt).format("HH:mm")}
                                    </span>
                                </li>

                            ))}
                    </ul>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar orientation="vertical" />
            </ScrollArea.Root>
        </aside>
    );
}
