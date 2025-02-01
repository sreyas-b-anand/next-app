"use client"
import { useState, useEffect } from 'react';

export const useFetch = () => {
    const [time, setTime] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
const [isLoading , setIsLoading] = useState<boolean | null>(false)
    useEffect(() => {
        const fetchTime = async () => {
            try {
                setIsLoading(true)
                // Fetch current time in London from WorldTimeAPI
                const response = await fetch('https://api.api-ninjas.com/v1/worldtime?timezone=Europe/London' , {
                    headers:{'X-Api-Key': `${process.env.NEXT_PUBLIC_APP_TIME_API}`}
                });
                
             if(!response.ok){
                throw Error("Failed to fetch")
             }
                const data = await response.json();
                const time = data.hour + ":" + data.minute + ":" +data.second
                            
                
                

                // Set the time data to state
                setTime(time);
                setError(null);  // Clear any previous error
                
            } catch (error) {
                console.error('Error fetching time:', error);
                setTime(null);  // Clear any previous time
                setError('Failed to fetch time');
            }
            finally{
                setIsLoading(false)
            }
        };

        fetchTime();
    }, []);

    return { time, isLoading , error };
};
