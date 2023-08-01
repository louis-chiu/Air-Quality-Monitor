SELECT MAX(interpolated_value)*1.1 FROM (

    
      SELECT
        adjusted_value,
        CASE
          WHEN adjusted_value IS NULL THEN ROUND(
            (
              LAG (adjusted_value) OVER (
                ORDER BY
                  sensorid,
                  start_interval
              ) + LEAD (adjusted_value) OVER (
                ORDER BY
                  sensorid,
                  start_interval
              )
            ) / 2,
            2
          )
          ELSE adjusted_value
        END AS interpolated_value
      FROM
        (
          SELECT
            re.mac,
            s."Desc",
            l."locDesc",
            g.start_interval,
            g.sensorid,
            g.value,
            CASE
              WHEN s."Desc" = 'TVOC' THEN g.value * 1000
              ELSE g.value
            END AS adjusted_value
          FROM
            (
              SELECT
                grid.start_interval,
                sensor.sensorid,
                t.value
              FROM
                (
                  SELECT
                    generate_series (
                      '2023/7/31 09:24:58',
                      to_timestamp(1690795122)::timestamp without time zone,
                      interval '5 min'
                    ) AS start_interval
                ) grid
                CROSS JOIN (
                  SELECT DISTINCT
                    sensorid
                  FROM
                    records
                ) sensor
                LEFT JOIN records t ON t.sensorid = sensor.sensorid
                AND t."timestamp" >= grid.start_interval
                AND t."timestamp" < grid.start_interval + interval '5  min'
                LEFT JOIN registedsnrs re ON re.sensorid = t.sensorid
            ) g
            INNER JOIN registedsnrs re ON re.sensorid = g.sensorid
            INNER JOIN subtype s ON s.stypeid = re.stypeid
            AND (s."Desc" = 'TVOC')
            INNER JOIN locations l ON l.locid = re.locid
        ) subquery
    ) subquery2

